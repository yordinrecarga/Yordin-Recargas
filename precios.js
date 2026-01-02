// =========================================================
//  ACTUALIZA ESTOS VALORES DIARIAMENTE
// =========================================================
export const TASA_DOLAR_VES = 298.00; // Tasa de cambio de USD a Bolívares
// =========================================================

// Precios base en USD para Roblox - NO CAMBIAR ESTOS VALORES
const robloxPackagesUSD = [
    { id: 1, name: '80 Robux', priceUSD: 2.20 },
    { id: 1, name: '500 Robux', priceUSD: 10.05 },
    { id: 2, name: '1,000 Robux', priceUSD: 18.55 },
    { id: 3, name: '2,000 Robux', priceUSD: 35.10 },
    { id: 4, name: '5,250 Robux', priceUSD: 79.20 }
];

// Precios base en USD para PUBG Mobile - NO CAMBIAR ESTOS VALORES
const pubgmobilePackagesUSD = [
    { id: 1, name: '60 UC', priceUSD: 0.99 },
    { id: 2, name: '300 + 25 UC', priceUSD: 5.05 },
    { id: 3, name: '600 + 60 UC', priceUSD: 9.85 },
    { id: 4, name: '1500 + 300 UC', priceUSD: 24.52 },
    { id: 5, name: '3000 + 850 UC', priceUSD: 49.28 },
    { id: 6, name: '6000 + 2100 UC', priceUSD: 98.56 }
];

// Precios base en USD para Free Fire - NO CAMBIAR ESTOS VALORES
const freefirePackagesUSD = [
    { id: 1, name: '100+10 Diamantes', priceUSD: 2.12 },
    { id: 2, name: '310+31 Diamantes', priceUSD: 6.84 },
    { id: 3, name: '520+52 Diamantes', priceUSD: 9.90 },
    { id: 4, name: '1050+105 Diamantes', priceUSD: 16.60 },
    { id: 5, name: '2180+218 Diamantes', priceUSD: 34.96 },
    { id: 6, name: '5600+560 Diamantes', priceUSD: 89.50 },
    { id: 7, name: 'Tarjeta Semanal', priceUSD: 4.60 },
    { id: 8, name: 'Tarjeta Mensual', priceUSD: 14.50 },
    { id: 9, name: 'Tarjeta Básica', priceUSD: 1.70},
    { id: 10, name: 'Pase de Nivel', priceUSD: 11.70 },
{ id: 11, name: 'Pase Booyah', priceUSD: 4.99}
];

// Precios base en USD para Arena Breakout - NO CAMBIAR ESTOS VALORES
const arenabreakoutPackagesUSD = [
    { id: 1, name: '60 Bonds', priceUSD: 1.01 },
    { id: 2, name: '335 Bonds', priceUSD: 5.00 },
    { id: 3, name: '675 Bonds', priceUSD: 9.92 },
    { id: 4, name: '1690 Bonds', priceUSD: 24.57 },
    { id: 5, name: '3400 Bonds', priceUSD: 49.06 },
    { id: 6, name: '6820 Bonds', priceUSD: 98.07 },
    { id: 8, name: 'Maletín Compuesto', priceUSD: 8.85 },
    { id: 9, name: 'Paquete Principiante', priceUSD: 1.01 },
    { id: 10, name: 'Maletín Antibalas', priceUSD: 2.97 },
    { id: 11, name: 'Pase Avanzado', priceUSD: 5.00 },
    { id: 12, name: 'Pase Premium', priceUSD: 14.85 }
];

// Precios base en USD para Blood Strike - NO CAMBIAR ESTOS VALORES
const bloodstrikePackagesUSD = [
    { id: 1, name: '105 Gold', priceUSD: 2.10 },
    { id: 2, name: '320 Gold', priceUSD: 3.50 },
    { id: 3, name: '540 Gold', priceUSD: 6.10 },
    { id: 4, name: '1100 Gold', priceUSD: 11.50 },
    { id: 5, name: '2260 Gold', priceUSD: 22.88 },
    { id: 6, name: '5800 Gold', priceUSD: 52.59 },
    { id: 7, name: 'Pase Elite', priceUSD: 5.54 },
    { id: 8, name: 'Pase Elite Plus', priceUSD: 10.95 }
];

// Precios base en USD para Mobile Legends - NO CAMBIAR ESTOS VALORES
const mobilelegendsPackagesUSD = [
    { id: 1, name: '50 Diamantes', priceUSD: 1.00 },
    { id: 2, name: '100 Diamantes', priceUSD: 2.00 },
    { id: 3, name: '250 Diamantes', priceUSD: 5.00 },
    { id: 4, name: '500 Diamantes', priceUSD: 10.00 },
    { id: 5, name: '1000 Diamantes', priceUSD: 20.00 },
    { id: 6, name: '2000 Diamantes', priceUSD: 40.00 }
];

// Calcula y exporta el array final de Roblox con todos los precios
export const robloxPackages = robloxPackagesUSD.map(pkg => {
    const priceVES = (pkg.priceUSD * TASA_DOLAR_VES).toFixed(2);
    return {
        ...pkg,
        priceVES: parseFloat(priceVES)
    };
});

// Calcula y exporta el array final de PUBG Mobile con todos los precios
export const pubgmobilePackages = pubgmobilePackagesUSD.map(pkg => {
    const priceVES = (pkg.priceUSD * TASA_DOLAR_VES).toFixed(2);
    return {
        ...pkg,
        priceVES: parseFloat(priceVES)
    };
});

// Calcula y exporta el array final de Free Fire con todos los precios
export const freefirePackages = freefirePackagesUSD.map(pkg => {
    const priceVES = (pkg.priceUSD * TASA_DOLAR_VES).toFixed(2);
    return {
        ...pkg,
        priceVES: parseFloat(priceVES)
    };
});

// Calcula y exporta el array final de Arena Breakout con todos los precios
export const arenabreakoutPackages = arenabreakoutPackagesUSD.map(pkg => {
    const priceVES = (pkg.priceUSD * TASA_DOLAR_VES).toFixed(2);
    return {
        ...pkg,
        priceVES: parseFloat(priceVES)
    };
});

// Calcula y exporta el array final de Blood Strike con todos los precios
export const bloodstrikePackages = bloodstrikePackagesUSD.map(pkg => {
    const priceVES = (pkg.priceUSD * TASA_DOLAR_VES).toFixed(2);
    return {
        ...pkg,
        priceVES: parseFloat(priceVES)
    };
});

// Calcula y exporta el array final de Mobile Legends con todos los precios
export const mobilelegendsPackages = mobilelegendsPackagesUSD.map(pkg => {
    const priceVES = (pkg.priceUSD * TASA_DOLAR_VES).toFixed(2);
    return {
        ...pkg,
        priceVES: parseFloat(priceVES)
    };
});
