import { ChangeEvent, FormEvent } from "react";

type Props = {
  question: any;
  stateName: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const FormTemplate = ({ question, stateName, value, onChange }: Props) => {
  return (
    <div className="w-[50vw] flex justify-center ">
      <form
        className="w-full max-w-xs form-control"
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
        }}
      >
        <label className="label">
          <span className="text-white label-text">{question}</span>
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type here"
            className="w-full max-w-xs input input-bordered"
            value={value}
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
};

export default FormTemplate;
