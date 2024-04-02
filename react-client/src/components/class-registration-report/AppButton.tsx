interface AppButtonProps {
  onClick: (event: any) => void;
  color: 'primary' | 'secondary';
  children: any;
}

export default function AppButton({onClick, color, children}: AppButtonProps) {

  const colorClass = () => {
    if (color === 'primary') return 'bg-blue-400 hover:bg-blue-500 text-white';
    if (color === 'secondary') return 'border-gray-500 border text-gray-700 hover:bg-gray-500 hover:text-white';
  }

  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded-md font-display ${colorClass()}`}>
      {children}
    </button>
  )
}