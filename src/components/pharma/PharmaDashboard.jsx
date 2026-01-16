import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, query, orderBy, getDocs, where } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { motion, AnimatePresence } from 'framer-motion';
import { Printer, LogOut, ChevronRight, FileText, Search, User, Calendar, Pill } from 'lucide-react';

export default function PharmaDashboard() {
    const [prescriptions, setPrescriptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPresc, setSelectedPresc] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const isAuth = localStorage.getItem('pharma_auth');
        if (!isAuth) {
            navigate('/pharma');
        } else {
            fetchPrescriptions();
        }
    }, [navigate]);

    const fetchPrescriptions = async () => {
        console.log("Fetching prescriptions with status: PENDING...");
        try {
            const q = query(
                collection(db, 'prescriptions'),
                where('status', '==', 'PENDING'),
                orderBy('createdAt', 'desc')
            );
            const querySnapshot = await getDocs(q);
            console.log("Query Snapshot size:", querySnapshot.size);
            const docs = querySnapshot.docs.map(doc => {
                const data = doc.data();
                console.log("Raw doc data:", doc.id, data);
                return { id: doc.id, ...data };
            });

            console.log("Processed docs:", docs);
            setPrescriptions(docs);
        } catch (error) {
            console.error("Error fetching prescriptions:", error);
            // If there's an index error, Firestore usually provides a link in the console
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('pharma_auth');
        navigate('/pharma');
    };

    const getScribbleData = (scribblePaths) => {
        if (!scribblePaths || !Array.isArray(scribblePaths)) return { paths: [], viewBox: "0 0 500 500" };

        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

        const paths = scribblePaths.map(pathObj => {
            const points = pathObj.points || [];
            if (points.length === 0) return '';

            return `M ${points[0].x} ${points[0].y} ` + points.map(p => {
                minX = Math.min(minX, p.x);
                minY = Math.min(minY, p.y);
                maxX = Math.max(maxX, p.x);
                maxY = Math.max(maxY, p.y);
                return `L ${p.x} ${p.y}`;
            }).join(' ');
        });

        const padding = 40;
        const vb = (minX === Infinity) ? "0 0 500 500" :
            `${minX - padding} ${minY - padding} ${maxX - minX + padding * 2} ${maxY - minY + padding * 2}`;

        return { paths, viewBox: vb };
    };

    const handlePrint = (presc) => {
        const { paths, viewBox } = getScribbleData(presc.scribblePaths);
        const printWindow = window.open('', '_blank');

        // Ensure paths aren't empty
        if (paths.length === 0) {
            alert("No scribble data found for this prescription.");
            return;
        }

        const html = `
            <html>
                <head>
                    <title>Prescription - ${presc.patientName}</title>
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
                        body { font-family: 'Inter', sans-serif; padding: 20px 40px; color: #000; line-height: 1.4; overflow: hidden; }
                        .header { text-align: center; border-bottom: 2px solid #000; padding-bottom: 10px; margin-bottom: 20px; }
                        .header h1 { margin: 0; color: #000; font-family: serif; font-size: 28px; text-transform: uppercase; }
                        .header p { margin: 5px 0; font-weight: 600; font-size: 14px; }
                        .patient-info { display: flex; justify-content: space-between; margin-bottom: 20px; border-bottom: 1px solid #000; padding-bottom: 8px; }
                        .label { font-weight: bold; font-size: 10px; text-transform: uppercase; }
                        .val { font-size: 16px; margin-top: 2px; font-weight: 600; }
                        .scribble-container { width: 100%; height: 65vh; display: flex; justify-content: center; align-items: center; overflow: hidden; }
                        .scribble-svg { width: 100%; height: 100%; max-height: 100%; display: block; object-fit: contain; }
                        .footer { position: fixed; bottom: 20px; left: 0; right: 0; border-top: 1px solid #ccc; padding-top: 8px; font-size: 10px; color: #666; text-align: center; }
                        @media print { 
                            @page { size: portrait; margin: 0.5cm; }
                            body { -webkit-print-color-adjust: exact; }
                            .no-print { display: none; } 
                            html, body { height: 99%; overflow: hidden; page-break-after: avoid; page-break-before: avoid; }
                        }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>UMA DENTAL CLINIC</h1>
                        <p>Dr. Ravindra Singh | Hardoi, UP</p>
                    </div>
                    <div class="patient-info">
                        <div>
                            <div class="label">Patient Name</div>
                            <div class="val">${presc.patientName}</div>
                        </div>
                        <div style="text-align: right;">
                            <div class="label">Date</div>
                            <div class="val">${new Date(presc.createdAt?.seconds * 1000).toLocaleDateString()}</div>
                        </div>
                    </div>

                    <div class="scribble-container">
                        <svg viewBox="${viewBox}" class="scribble-svg">
                            ${paths.map(d => `
                                <path d="${d}" fill="none" stroke="#000" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            `).join('')}
                        </svg>
                    </div>

                    <div class="footer">
                        Electronic Prescription Signature - Dr. Ravindra Singh
                    </div>
                    <script>
                        window.onload = () => {
                            setTimeout(() => {
                                window.print();
                                window.addEventListener('afterprint', () => {
                                    window.close();
                                });
                            }, 800);
                        };
                    </script>
                </body>
            </html>
        `;
        printWindow.document.write(html);
        printWindow.document.close();
    };

    const filteredPrescriptions = prescriptions.filter(p =>
        p.patientName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const activeScribble = selectedPresc ? getScribbleData(selectedPresc.scribblePaths) : null;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-[#051124] text-slate-900 dark:text-slate-100 flex flex-col">
            {/* Nav */}
            <header className="bg-white dark:bg-slate-900/50 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <FileText className="w-6 h-6 text-primary" />
                        <h1 className="font-serif font-bold text-xl">Uma Pharma Portal</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="hidden sm:inline text-sm text-slate-500 font-medium">Pharmacist Root</span>
                        <button
                            onClick={handleLogout}
                            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-600 dark:text-slate-400"
                        >
                            <LogOut className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* List Section */}
                <div className="lg:col-span-4 flex flex-col gap-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                            type="text"
                            placeholder="Search patients..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all shadow-sm"
                        />
                    </div>

                    <div className="flex-1 bg-white dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden flex flex-col shadow-sm">
                        <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/10">
                            <h2 className="font-bold text-sm text-slate-500 uppercase tracking-wider">Pending Orders</h2>
                        </div>

                        <div className="flex-1 overflow-y-auto max-h-[60vh] lg:max-h-[calc(100vh-280px)]">
                            {loading ? (
                                Array(5).fill(0).map((_, i) => (
                                    <div key={i} className="p-4 border-b border-slate-100 dark:border-slate-800 animate-pulse">
                                        <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-800 rounded mb-2"></div>
                                        <div className="h-3 w-1/3 bg-slate-100 dark:bg-slate-800 rounded"></div>
                                    </div>
                                ))
                            ) : filteredPrescriptions.map(presc => (
                                <button
                                    key={presc.id}
                                    onClick={() => setSelectedPresc(presc)}
                                    className={`w-full p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors border-b border-slate-100 dark:border-slate-800 ${selectedPresc?.id === presc.id ? 'bg-primary/5 dark:bg-primary/10 border-r-2 border-r-primary' : ''}`}
                                >
                                    <div className="text-left">
                                        <p className="font-semibold text-slate-900 dark:text-white">{presc.patientName}</p>
                                        <p className="text-xs text-slate-500">{new Date(presc.createdAt?.seconds * 1000).toLocaleDateString()}</p>
                                    </div>
                                    <ChevronRight className={`w-4 h-4 transition-transform ${selectedPresc?.id === presc.id ? 'translate-x-1 text-primary' : 'text-slate-300'}`} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Detail Section */}
                <div className="lg:col-span-8">
                    <AnimatePresence mode="wait">
                        {selectedPresc ? (
                            <motion.div
                                key={selectedPresc.id}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-lg overflow-hidden flex flex-col h-full"
                            >
                                <div className="p-8 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase rounded-md tracking-wider">Digital Prescription</span>
                                            <span className="text-slate-400 text-xs">{new Date(selectedPresc.createdAt?.seconds * 1000).toLocaleString()}</span>
                                        </div>
                                        <h2 className="text-3xl font-serif font-bold text-slate-900 dark:text-white">{selectedPresc.patientName}</h2>
                                    </div>
                                    <button
                                        onClick={() => handlePrint(selectedPresc)}
                                        className="flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all shadow-lg shadow-primary/20"
                                    >
                                        <Printer className="w-5 h-5" />
                                        Print Prescription
                                    </button>
                                </div>

                                <div className="flex-1 p-8 bg-slate-50 dark:bg-slate-900/50 flex flex-col items-center justify-center min-h-[500px]">
                                    <div className="w-full max-w-2xl aspect-[3/4] bg-white dark:bg-slate-800 rounded-2xl shadow-inner border border-slate-200 dark:border-slate-700 relative overflow-hidden p-6">
                                        <div className="absolute top-4 left-6 text-[10px] font-bold text-slate-300 uppercase tracking-widest pointer-events-none">
                                            Handwritten Scribble
                                        </div>
                                        <svg viewBox={activeScribble.viewBox} className="w-full h-full drop-shadow-md">
                                            {activeScribble.paths.map((d, idx) => (
                                                <motion.path
                                                    key={idx}
                                                    initial={{ pathLength: 0, opacity: 0 }}
                                                    animate={{ pathLength: 1, opacity: 1 }}
                                                    transition={{ duration: 0.8, delay: idx * 0.02 }}
                                                    d={d}
                                                    fill="none"
                                                    stroke="#3b82f6"
                                                    strokeWidth="3.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            ))}
                                        </svg>
                                    </div>

                                    <div className="mt-6 flex items-center gap-2 text-slate-400 text-sm italic">
                                        <Pill className="w-4 h-4" />
                                        Doctor's original handwriting and marks
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="h-full border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl flex flex-col items-center justify-center p-12 text-center text-slate-400 bg-white/50 dark:bg-transparent">
                                <FileText className="w-16 h-16 mb-6 opacity-20" />
                                <p className="text-lg font-medium">Select a patient</p>
                                <p className="max-w-xs text-sm mt-2">Pick a pending order to view the scribble and print the prescription.</p>
                            </div>
                        )}
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
