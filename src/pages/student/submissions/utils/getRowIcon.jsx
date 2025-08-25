import { EyeIcon, FilePenLine } from "lucide-react";

export const SubmissionStatusEnum = {
  SUBMITTED: "submitted", // when the user has submitted and we are checking
  IN_PROGRESS: "in_progress", // when the user has started the assessment
  COMPLETED: "completed", // when the user has completed the assessment and we have checked the answers
};

export const getRowIcon = (status) => {
  switch (status) {
    case SubmissionStatusEnum.SUBMITTED:
    case SubmissionStatusEnum.COMPLETED:
      return <EyeIcon size={20} className="text-blue-500" />;
    case SubmissionStatusEnum.IN_PROGRESS:
      return <FilePenLine size={20} className="text-green-500" />;
    default:
      return null;
  }
};
