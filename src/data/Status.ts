export const applicationStatusColors = {
        Received: { bg: "#E0E0E0", text: "#616161" }, // gris claro / gris oscuro
        Viewed: { bg: "#BBDEFB", text: "#1976D2" }, // azul claro / azul fuerte
        InProcess: { bg: "#FFE082", text: "#F57F17" }, // amarillo claro / naranja fuerte
        Rejected: { bg: "#FFCDD2", text: "#C62828" }, // rojo claro / rojo fuerte
        Accepted: { bg: "#C8E6C9", text: "#2E7D32" }, // verde claro / verde fuerte
        Cancelled: { bg: "#D7CCC8", text: "#4E342E" }, // marrón claro / marrón fuerte
        OnHold: { bg: "#FFE0B2", text: "#EF6C00" }  // naranja claro / naranja fuerte
    } as const;