interface GlobalHttpConfig {
    header: Record<string, unknown>
    parmas: Record<string, unknown>
    [key: string]: any
}
interface AxiosConfig {
    [key: string]: any
}
export type { GlobalHttpConfig, AxiosConfig }