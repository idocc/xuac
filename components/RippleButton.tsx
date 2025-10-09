"use client";

import React, { useRef, useState } from "react";
import clsx from "clsx";

interface Ripple {
  x: number;
  y: number;
  id: number;
}

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "white" | "green" | "transparent";
  disabled?: boolean;
}

export const RippleButton: React.FC<RippleButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "white",
  disabled = false,
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleIdRef = useRef(0);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || disabled) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();

    let x: number, y: number;

    if ('touches' in event) {
      // Touch event
      const touch = event.touches[0];
      x = touch.clientX - rect.left;
      y = touch.clientY - rect.top;
    } else {
      // Mouse event
      x = event.clientX - rect.left;
      y = event.clientY - rect.top;
    }

    const newRipple: Ripple = {
      x,
      y,
      id: rippleIdRef.current++,
    };

    setRipples((prev) => [...prev, newRipple]);

    // Remove ripple after animation (0.6s to match animation duration)
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id));
    }, 600);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    // 绿色按钮不触发波纹效果
    if (variant === "green") {
      return;
    }
    setIsHovered(true);
    createRipple(e);
  };

  const handleMouseLeave = () => {
    // 绿色按钮不触发波纹效果
    if (variant === "green") {
      return;
    }
    setIsHovered(false);
    setRipples([]); // 清除所有波纹
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  // 根据不同的 variant 设置不同的颜色
  const getColors = () => {
    switch (variant) {
      case "white":
        return {
          bg: "bg-white",
          fromColor: "#ffffff", // 从白色
          toColor: "#bdee63",   // 变到绿色
          fromTextColor: "#000000", // 文字始终黑色
          toTextColor: "#000000",
          border: "",
        };
      case "green":
        return {
          bg: "bg-[#bdee63]",
          fromColor: "#bdee63", // 从绿色
          toColor: "#ffffff",   // 变到白色
          fromTextColor: "#000000", // 文字始终黑色
          toTextColor: "#000000",
          border: "",
        };
      case "transparent":
        return {
          bg: "bg-transparent",
          fromColor: "transparent", // 从透明
          toColor: "#ffffff",       // 变到白色
          fromTextColor: "#ffffff", // 文字从白色
          toTextColor: "#000000",   // 变到黑色
          border: "border border-white/40",
        };
      default:
        return {
          bg: "bg-white",
          fromColor: "#ffffff",
          toColor: "#bdee63",
          fromTextColor: "#000000",
          toTextColor: "#000000",
          border: "",
        };
    }
  };

  const colors = getColors();

  return (
    <button
      ref={buttonRef}
      className={clsx(
        "relative overflow-hidden rounded-[4px]",
        colors.border,
        "active:scale-[0.98]",
        disabled && "opacity-50 cursor-not-allowed",
        !disabled && "cursor-pointer",
        className
      )}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={createRipple}
      disabled={disabled}
      style={{
        WebkitTapHighlightColor: "transparent",
        backgroundColor: isHovered ? colors.toColor : colors.fromColor,
        color: isHovered ? colors.toTextColor : colors.fromTextColor,
        transition: "background-color 0.6s cubic-bezier(0.4, 0, 0.2, 1), color 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s ease",
      }}
    >
      {/* 按钮内容 */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* 波纹颜色渐变效果 */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full pointer-events-none ripple-effect"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
            backgroundColor: colors.toColor,
            transform: "translate(-50%, -50%)",
            animation: "rippleSpread 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards",
          }}
        />
      ))}

      <style jsx>{`
        @keyframes rippleSpread {
          0% {
            width: 0;
            height: 0;
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          100% {
            width: 600px;
            height: 600px;
            opacity: 1;
          }
        }
      `}</style>
    </button>
  );
};

