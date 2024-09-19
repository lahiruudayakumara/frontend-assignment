import { PlusIcon } from "lucide-react";

interface Props {
    onClick: () => void;
}

const AddFieldButton: React.FC<Props> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex items-center gap-2 p-1 px-2 bg-white hover:bg-slate-50 cursor-pointer my-4 border border-slate-300 rounded-md"
        >
            <PlusIcon className="w-4 h-4" />
            <h1 className="text-sm font-semibold">Add Field</h1>
        </button>
    );
};

export default AddFieldButton;
