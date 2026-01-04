declare module "@inertiajs/core" {
    export interface InertiaConfig {
        flashDataType: {
            toast?: {
                type: "success" | "warning" | "error" | "info";
                message: string;
            };
        };
    }
}
