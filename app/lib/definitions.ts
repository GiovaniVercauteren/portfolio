export type Skill = {
    name: string;
    level: number;
    type: 'language' | 'framework' | 'runtime' | 'tool';
};

export type Experience = {
    startDate: Date;
    endDate?: Date;
    position: string;
    company: string;
    location: string;
    description: string;
    tags?: string[];
};