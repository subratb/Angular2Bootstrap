export class Feature1Child1 {
    constructor(public Id: number, public Message: string) { }
}

export class Feature1Service {
    getChild(id: number): Promise<Feature1Child1> {
        return Promise.resolve(new Feature1Child1(1, ""));
    }
}