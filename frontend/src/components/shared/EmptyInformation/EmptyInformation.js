import { MdSearchOff } from "react-icons/md";
import { twMerge } from "tailwind-merge"

/**
 * EmptyInformation component
 *
 * This component displays a message indicating the absence of information.
 * It shows an icon, a title, and a subtitle with customizable container styles.
 *
 * @param {Object} props - Component props
 * @param {string} props.title - The title text to display
 * @param {string} props.subtitle - The subtitle text to display
 * @param {string} [props.containerStyle] - Additional CSS classes for container styling
 *
 * @returns {JSX.Element} - A styled component indicating no information available
 */
export const EmptyInformation = ({ title, subtitle, containerStyle }) => {
  return (
    <div
      className={twMerge(
        "flex items-center justify-center border border-gray-300 min-h-[127px] min-w-[241px] p-4 rounded-md",
        containerStyle
      )}
    >
      <div className="flex flex-col items-center gap-2 border-gray-200 p-4">
        <div className="text-gray-500">
          <MdSearchOff size={32} className="mb-2 text-green-500" />
        </div>
        <h4 className="text-base font-bold text-gray-800 text-center">{title}</h4>
        <p className="text-sm text-center text-gray-500">{subtitle}</p>
      </div>
    </div>
  )
}
