// src/components/StatBar.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const StatBar = ({ label, value, maxValue }) => {
    // Menghindari pembagian dengan nol dan memastikan value adalah angka
    const numericValue = Number(value) || 0;
    const numericMaxValue = Number(maxValue) || 100;
    const percentage = numericMaxValue > 0 ? (numericValue / numericMaxValue) * 100 : 0;

    return (
        <div>
            <div className="flex justify-between mb-1 text-sm">
                <span className="font-medium">{label}</span>
                <span>{numericValue}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div
                    className="bg-black h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                />
            </div>
        </div>
    );
};

export default StatBar;