import { type ReactNode, useEffect, useState } from "react";

import { formatISOFullTime } from "@/lib/util/time";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const getNaturalDelay = () => Math.floor(Math.random() * 80) + 40;

function InfoLog({ children }: { children: ReactNode }) {
  return (
    <div className="whitespace-nowrap text-ellipsis overflow-hidden">
      <span className="whitespace-nowrap text-ellipsis overflow-hidden">
        <span className="text-cyan-200">{formatISOFullTime(new Date())} </span>
        <span className="text-cyan-400">INFO </span>
        {children}
      </span>
    </div>
  );
}

export function Terminal() {
  const [cmd, setCmd] = useState("");
  const [output, setOutput] = useState<ReactNode>(null);

  useEffect(() => {
    const outputLines = [
      "[PreLoader] Loading symbols from pdb...",
      "[PreLoader] Loaded 630486 symbols",
      "[PreLoader] Loading Reverse Lookup Table",
      "[PreLoader] Preloading: LeviLamina <LeviLamina.dll>",
      "[PreLoader] LeviLamina Loaded.",
      "[LeviLamina] Statistics has been enabled, you can disable statistics in configuration file",
      "[CrashLogger] CrashLogger enabled successfully",
      "[LeviLamina]",
      "[LeviLamina]          _               _ _                    _",
      "[LeviLamina]         | |    _____   _(_) |    __ _ _ __ ___ (_)_ __   __ _",
      "[LeviLamina]         | |   / _ \\ \\ / / | |   / _` | '_ ` _ \\| | '_ \\ / _` |",
      "[LeviLamina]         | |__|  __/\\ V /| | |__| (_| | | | | | | | | | | (_| |",
      "[LeviLamina]         |_____\\___| \\_/ |_|_____\\__,_|_| |_| |_|_|_| |_|\\__,_|",
      "[LeviLamina]",
      "[LeviLamina]         ------------   Light-Weight Mod Loader   -------------",
      "[LeviLamina]",
      "[LeviLamina]",
      "[LeviLamina] LeviLamina is a free software licensed under LGPLv3",
      "[LeviLamina] Help us translate & improve text -> https://translate.liteldev.com/",
      "[LeviLamina] Loading mods...",
      "[LeviLamina] 114 mod(s) loaded",
    ];

    (async () => {
      let currentCmd = "";
      for (const char of ".\\bedrock_server_mod.exe") {
        currentCmd += char;
        setCmd(currentCmd);
        await sleep(getNaturalDelay());
      }

      let currentOutput: ReactNode[] = [];
      for (let i = 0; i < outputLines.length; i++) {
        currentOutput = [
          ...currentOutput,
          <InfoLog key={i}>{outputLines[i].replaceAll(" ", "\u00A0")}</InfoLog>,
        ];
        setOutput(currentOutput);

        await sleep(getNaturalDelay());
      }
    })();
  }, []);

  return (
    <div className="max-h-100 w-150 h-300 rounded-lg bg-gray-800">
      <div className="w-full bg-gray-900 rounded-t-lg flex p-2 gap-2">
        <div className="w-2.5 h-2.5 bg-red-500 rounded-full" />
        <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full" />
        <div className="w-2.5 h-2.5 bg-green-500 rounded-full" />
      </div>
      <div
        className="max-h-90 p-4 font-mono text-white overflow-y-hidden flex flex-col-reverse"
        style={{ fontSize: "0.65rem", lineHeight: "0.85rem" }}
      >
        <div>{output}</div>
        <div>
          <span>PS C:\Users\LeviMC&gt; </span>
          <span className="text-yellow-200">{cmd}</span>
        </div>
        <div>
          <span>PowerShell 7.4.6</span>
        </div>
      </div>
    </div>
  );
}
