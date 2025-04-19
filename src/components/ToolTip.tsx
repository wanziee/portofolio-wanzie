type ToolTipProps = {
  label: string;
};

function ToolTip({ label }: ToolTipProps) {
  return (
    <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      {label}
    </span>
  );
}

export default ToolTip;
