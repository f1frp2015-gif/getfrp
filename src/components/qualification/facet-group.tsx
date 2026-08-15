// UL Product iQ 式分面筛选组:某个 facet 下的多选复选框 + 计数。受控组件,
// selected / onToggle 由父级(客户端目录)管理。无 hook,跟随父级渲染环境。
export interface FacetOption {
  tagId: string;
  label: string;
  count: number;
}

export function FacetGroup({
  label,
  options,
  selected,
  onToggle,
}: {
  label: string;
  options: FacetOption[];
  selected: string[];
  onToggle: (tagId: string) => void;
}) {
  if (!options.length) return null;
  return (
    <div className="space-y-1.5">
      <div className="text-xs font-semibold">{label}</div>
      <div className="space-y-1">
        {options.map((o) => (
          <label
            key={o.tagId}
            className="flex cursor-pointer items-center gap-2 text-sm"
          >
            <input
              type="checkbox"
              checked={selected.includes(o.tagId)}
              onChange={() => onToggle(o.tagId)}
              className="accent-primary"
            />
            <span className="flex-1 truncate" title={o.label}>
              {o.label}
            </span>
            <span className="text-xs text-muted-foreground">{o.count}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
