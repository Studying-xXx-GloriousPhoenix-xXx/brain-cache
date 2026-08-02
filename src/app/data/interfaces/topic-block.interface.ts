export interface TopicBlock {
    name: string;
    content: {
        command: string;
        description: string;
    }[];
}
