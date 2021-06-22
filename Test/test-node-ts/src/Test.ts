export interface Test {
    name: string;
    execute: (me: Test, url: string) => Promise<void>;
    status?: string;
    input?: any;
    output?: any;
    error?: any;
}

export default Test;