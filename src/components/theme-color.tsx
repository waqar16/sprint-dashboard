import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import { SketchPicker } from "react-color";

export const defaultColor = ["#F6515B", "#FECA3C", "#0886EC", "#fff"];
const beautifulColors = [
  "#FF6633", // Coral
  "#FFB399", // Light Salmon
  "#FF33FF", // Pink
  "#FFAA00", // Orange
  "#99FF99", // Light Green
  "#66B2FF", // Sky Blue
  "#AA00AA", // Purple
  "#FF33CC", // Fuchsia
  "#99E6E6", // Light Blue
  "#6680B3", // Steel Blue
  "#FF0000", // Red
  "#FFD700", // Gold
  "#FF9933", // Deep Saffron
  "#FF8C00", // Dark Orange
  "#FFFF66", // Yellow
  "#008000", // Green
  "#0000FF", // Blue
  "#800080", // Purple
  "#808080", // Gray
  "#FFFFFF", // White
  "#000000", // Black
  "#FF1493", // Deep Pink
  "#9370DB", // Medium Purple
  "#8A2BE2", // Blue Violet
  "#A52A2A", // Brown
  "#1E90FF", // Dodger Blue
  "#7FFF00", // Chartreuse
  "#20B2AA", // Light Sea Green
  "#32CD32", // Lime Green
  "#6B8E23", // Olive Drab
];

type ThemeColorProps = {
  themeColor: string;
  setThemeColor: React.Dispatch<React.SetStateAction<string>>;
};

const ThemeColor: React.FC<ThemeColorProps> = ({
  themeColor,
  setThemeColor,
}) => {
  const [isColorPicker, setIsColorPicker] = useState(false);

  return (
    <div>
      <h1 className="text-base text-[#BAC0DD] " style={{ color: themeColor }}>
        Select colors
      </h1>
      <div className="flex justify-between mt-2 xl:mt-3">
        {/* default color */}
        <div className="flex gap-2">
          {defaultColor.map((color, i) => (
            <div
              key={i}
              //   bg={color}
              className={cn(
                "w-6 xl:w-8 h-6 xl:h-8 bg-white  rounded-full cursor-pointer"
                // `bg-[${color}]`
              )}
              style={{
                backgroundColor: color,
              }}
              onClick={() => setThemeColor(color)}
            />
          ))}
        </div>
        {/* color picker*/}
        <div className="relative flex items-center gap-2">
          <span className="text-xs text-white font-medium">Open editor</span>
          <Image
            src={"/generate/palette.webp"}
            width={40}
            height={40}
            alt="colorSvg"
            className="w-6 xl:w-8 h-auto cursor-pointer"
            onClick={() => setIsColorPicker(!isColorPicker)}
          />

          {/* absolute SketchPicker color */}
          {isColorPicker && (
            <div className="absolute top-10 right-0">
              <SketchPicker
                presetColors={beautifulColors}
                onChange={(color) => {
                  setThemeColor(color.hex);
                }}
                color={themeColor ? themeColor : "#C54EC9"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeColor;
