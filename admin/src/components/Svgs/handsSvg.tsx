import React from "react";
import { SvgProps } from "./types";
export const HandsSvg = ({ isSelected }: SvgProps) => {
  return (
    <div
      style={{
        width: "50px",
        cursor: "pointer",
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 86 93">
        <path
          fill={isSelected ? "#7b79ff" : "#fff"}
          fillRule="evenodd"
          d="M76.064 82.327c-2.276-10.226-.56-21.17 4.712-30.21l1.053-1.807c4.21-7.217 4.876-16.24 1.774-24.002L74.186 2.763A4.373 4.373 0 0070.104 0a5.547 5.547 0 00-5.54 5.54c0 .417.049.837.144 1.244L67.987 21a4.086 4.086 0 00-3.897 2.95l-1.405 4.91a19.41 19.41 0 01-3.148 6.342l-1.257 1.676a28.77 28.77 0 00-5.715 17.15c0 2.078.228 4.163.68 6.2l1.004 4.52c1.438 6.46 1.71 13.401.748 20.124L53.836 93h24.598l-2.37-10.673zM57.294 90l.672-4.705c.97-6.78.773-14.185-.787-21.2l-1.005-4.518c-1.6-7.212.093-15.014 4.508-20.9l1.256-1.675a22.42 22.42 0 003.635-7.319l1.404-4.909a1.067 1.067 0 011.785-.455l.115.115a5.717 5.717 0 011.688 4.075c0 .786-.156 1.55-.466 2.271l-2.457 5.733a19.393 19.393 0 00-1.576 7.682V48h3v-3.805c0-2.248.449-4.434 1.334-6.5l2.457-5.733c1.295-3.017.747-6.625-1.363-9.114L67.63 6.11C67.269 4.533 68.514 3 70.104 3c.575 0 1.083.343 1.295.877l9.417 23.546c2.767 6.91 2.172 14.948-1.58 21.375l-1.054 1.808c-5.652 9.685-7.477 21.412-5.05 32.371L74.695 90h-17.4zM9.47 82.327c2.275-10.226.56-21.17-4.712-30.21L3.705 50.31c-4.21-7.217-4.876-16.24-1.774-24.002l9.417-23.545A4.373 4.373 0 0115.43 0a5.547 5.547 0 015.54 5.54 5.5 5.5 0 01-.144 1.244L17.547 21a4.086 4.086 0 013.897 2.95l1.405 4.91a19.41 19.41 0 003.148 6.342l1.256 1.676a28.77 28.77 0 015.716 17.15c0 2.078-.228 4.163-.679 6.2l-1.005 4.52c-1.438 6.46-1.71 13.401-.748 20.124L31.698 93H7.1l2.37-10.673zM28.24 90l-.672-4.705c-.97-6.78-.773-14.185.787-21.2l1.005-4.518c1.6-7.212-.093-15.014-4.508-20.9l-1.256-1.675a22.442 22.442 0 01-3.635-7.319l-1.404-4.909a1.067 1.067 0 00-1.785-.455l-.115.115a5.717 5.717 0 00-1.688 4.075c0 .786.156 1.55.466 2.271l2.457 5.733a19.393 19.393 0 011.576 7.682L19.47 48h-3v-3.805c0-2.248-.45-4.434-1.335-6.5l-2.457-5.733c-1.295-3.017-.747-6.625 1.363-9.114L17.903 6.11C18.265 4.533 17.02 3 15.43 3c-.575 0-1.083.343-1.295.877L4.718 27.423c-2.767 6.91-2.172 14.948 1.58 21.375l1.054 1.808c5.652 9.685 7.477 21.412 5.05 32.371L10.838 90H28.24z"
          clipRule="evenodd"
        ></path>
        <path
          fill={isSelected ? "#7b79ff" : "#fff"}
          fillRule="evenodd"
          d="M42.859 0l-6.265 12.512-14.078 2.016 10.19 9.789-2.397 13.782 12.55-6.503 12.55 6.503-2.399-13.782 10.19-9.79-14.078-2.015L42.86 0zm5.847 22.908l1.378 7.928-7.225-3.746-7.227 3.746 1.378-7.928-5.81-5.584 8.036-1.152 3.623-7.236 3.624 7.238 8.036 1.153-5.813 5.58z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
};