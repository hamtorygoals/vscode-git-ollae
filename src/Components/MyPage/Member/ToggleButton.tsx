import ReactSwitch from 'react-switch';

interface ToggleButtonProps {
  isChecked: boolean;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleButton = ({ isChecked, setIsChecked }: ToggleButtonProps) => {
  return (
    <label className="flex items-center gap-2 font-medium text-sm text-[#808080]">
      <p>거부</p>
      <ReactSwitch
        onChange={() => setIsChecked(!isChecked)}
        checked={isChecked}
      />
      <p>수신</p>
    </label>
  );
};

export default ToggleButton;
