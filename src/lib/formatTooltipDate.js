// Fungsi untuk memformat tanggal tooltip
export const formatTooltipDate = (dateStr) => {
    const date = new Date(dateStr);
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const daySuffix = ((d) => {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    })(day);
    return `${month} ${day}${daySuffix}`;
};