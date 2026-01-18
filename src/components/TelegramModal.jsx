import React, { useState, useEffect } from 'react';
import { BiSupport } from 'react-icons/bi';
import { FaTelegramPlane, FaComments } from 'react-icons/fa';

const TelegramModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [hasBeenDismissed, setHasBeenDismissed] = useState(() => {
        return localStorage.getItem('telegramModalDismissed') === 'true';
    });

    useEffect(() => {
        if (!hasBeenDismissed) {
            const timer = setTimeout(() => {
                setIsModalOpen(true);
            }, 30000); // 30 seconds

            return () => clearTimeout(timer);
        }
    }, [hasBeenDismissed]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setHasBeenDismissed(true);
        localStorage.setItem('telegramModalDismissed', 'true');
    };

    const handleJoinNow = () => {
        // Replace with actual Telegram channel link
        window.open('https://t.me/alchemyst_ke');
        closeModal();
    };

    return (
        <>
            {/* Sticky Icons */}
            <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-2">
                <button
                    onClick={openModal}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-l-sm shadow-lg transition-colors duration-200 cursor-pointer"
                    aria-label="Join Telegram Channel"
                >
                    <FaTelegramPlane size={20} />
                </button>
                <button
                    onClick={openModal}
                    className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-l-sm shadow-lg transition-colors duration-200 cursor-pointer"
                    aria-label="Contact via Telegram"
                >
                    <BiSupport size={20} />
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 text-center">
                        <div className="p-6">
                            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
                                Join Our Telegram Channel
                            </h2>
                            <p className='uppercase mb-2 font-extrabold text-primary'>Best Kenyan (254🔞) Telegram Channel</p>

                            <div className="mb-6">
                                <ul className="list-inside space-y-1 text-gray-600 text-center">
                                    <li>🍆🔞 DAILY PORN (XXX) VIDEOS </li>
                                    <li>🍑💦 SEX TIPS AND TOYS</li>
                                    <li>🥵🔥 NUDES AND OF-LEAKS</li>
                                    <li>🔞🍑 FREE HOOK-UPS</li>
                                    <li>🔥💦 TRENDING VIDEOS</li>
                                </ul>
                            </div>

                            <p className="text-center text-gray-600 mb-6">
                                Join our Telegram channel and message admin for inquiries. <span className='text-primary'>(@alche_me)</span>
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={handleJoinNow}
                                    className="flex-1 bg-primary hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200"
                                >
                                    Join Now 
                                </button>
                                <button
                                    onClick={closeModal}
                                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-lg font-semibold transition-colors duration-200"
                                >
                                    Maybe Later
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default TelegramModal;