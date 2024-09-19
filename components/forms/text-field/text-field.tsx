
interface Props {
    label: string;
    value: string;
    setValue: (value: string) => void;
    type: "text" | "email" | "date" | "password" | "time" | "datetime-local" | "number",
    placeholder?: string;
    align?: "left" | "center" | "right";
}

const TextField: React.FC<Props> = ({ label, value, setValue, type, placeholder, align = "left" }) => {
    return (
        <div className="flex flex-col gap-2 my-2 ">
        <label className="text-base font-semibold text-slate-800">{label}</label>
        <input
            type={type}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className={`p-2 mt-1 border border-slate-300 rounded-md focus:outline-none focus:border-slate-500 text-${align}`}
        />
        </div>
    );
    }

export default TextField;