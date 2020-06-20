export interface PackagesResponse {
    header: string;
    packages: string[];
    packageItems: {
        icon: string;
        description: string;
    }[];
}
