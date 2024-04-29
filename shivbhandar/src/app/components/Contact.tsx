import { ContactType } from "../consts/contacts";
import cn from "classnames";

export default function Contact(props: { contact: ContactType }) {
  return (
    <div className="shadow flex flex-col p-2 bg-white rounded-md">
      <div className="text-slate-500 text-lg">{props.contact.company}</div>
      <div className="flex gap-x-2 border rounded-md mt-2">
        {props.contact.people.map((person, i, arr) => (
          <a
            key={person.name}
            className={cn("flex-1 flex items-center p-2 space-x-2", {
              "border-l": i !== 0 && arr.length > 1,
            })}
            href={`tel:+91${person.phone}`}
          >
            <div>
              <div className="h-10 w-10 flex items-center justify-center rounded-full">
                <span className="material-symbols-outlined text-slate-400">
                  call
                </span>
              </div>
            </div>
            <div>
              <div className="text-base text-slate-600 font-semibold">
                {person.name}
              </div>
              <div className="text-sm text-slate-500 font-medium	">
                {person.phone}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
