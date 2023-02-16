export type Instructor = {
    name: String;
    surname: String;
    description: String;
    imageURL: String;
};

export type Plan = {
    id: Number;
    name: String;
    description: String;
};

export type PlanDetails = {
    name: String;
    description: String;
};

export enum PlanType {
    Training = 'T',
    Diet = 'D'
};