import { ExamQuestion } from "./ExamQuestion";
import { GeneratedLink } from "./GeneratedLink";

export interface ExamInstance {
    examInstanceId: string;
    examDefinitionId: string;
    startedTime: string;
    endTime: string;
    duration: string;
    completionTime: string;
    generatedLink: GeneratedLink;
    createdBy: string;
    takenBy: string;
    status: string;
    questions: ExamQuestion;

}