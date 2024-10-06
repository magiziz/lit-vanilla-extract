import { ReactNode } from "react";

interface OptionsParameters<T extends string> {
  title: string;
  values: readonly T[];
  checkedId?: string;
  onItemRender?: (value: T) => ReactNode;
  onChange?: (value: T) => void;
}

export function Options<T extends string>({
  title,
  values,
  checkedId,
  onItemRender,
  onChange,
}: OptionsParameters<T>) {
  return (
    <div>
      <h4>{title}</h4>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          marginTop: 12,
        }}
      >
        {values.map((value) =>
          onItemRender ? (
            onItemRender(value)
          ) : (
            <label key={value}>
              <input
                checked={checkedId === value}
                onChange={() => onChange && onChange(value)}
                type="radio"
                value={value}
              />
              {value}
            </label>
          )
        )}
      </div>
    </div>
  );
}
