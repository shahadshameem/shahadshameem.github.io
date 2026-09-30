import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

const INITIAL_WELCOME: React.ReactNode = (
  <div className="space-y-2 text-neutral-300">
    <div className="text-sky-400 font-bold">
      [CET-NODE-ARM32] Firmware Shell v3.4.1 (STM32 Cortex-M3 + ESP32 Standby)
    </div>
    <div className="text-neutral-400 text-xs">
      Connected to terminal emulator. Type <span className="text-sky-300 font-semibold underline">help</span> or click command buttons below to interact.
    </div>
  </div>
);

export const TerminalWidget: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'about',
      output: (
        <div className="space-y-1.5 text-xs text-neutral-300">
          <p className="text-white font-semibold">Shahad Shameem V.P — Embedded Systems Engineer & Systems Developer</p>
          <p>• B.Tech in Electronics & Communication Engg @ College of Engineering Trivandrum (CET)</p>
          <p>• Former Customer Support Engineer @ Cherrylabs, Bangalore (Fortinet Enterprise Firewalls)</p>
          <p className="text-sky-300">• Core focus: Fault-tolerant firmware, LoRa RF networks, and high-performance Web PWAs (WayMate)</p>
        </div>
      ),
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandList, setCommandList] = useState<string[]>(['about']);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    setCommandList((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const lower = cmd.toLowerCase();
    let result: React.ReactNode = null;

    switch (lower) {
      case 'help':
        result = (
          <div className="space-y-1 text-xs">
            <p className="text-neutral-400 font-semibold mb-1">Available System Commands:</p>
            {PORTFOLIO_DATA.terminalCommands.map((c) => (
              <div key={c.cmd} className="grid grid-cols-12 gap-2">
                <span className="col-span-4 text-sky-400 font-semibold">{c.cmd}</span>
                <span className="col-span-8 text-neutral-400">{c.desc}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'about':
        result = (
          <div className="space-y-1 text-xs text-neutral-300">
            <p className="text-white font-semibold">{PORTFOLIO_DATA.personal.name}</p>
            <p className="text-neutral-400">{PORTFOLIO_DATA.personal.title}</p>
            <p>{PORTFOLIO_DATA.personal.tagline}</p>
            <p className="text-emerald-400 font-medium">Status: {PORTFOLIO_DATA.personal.status}</p>
          </div>
        );
        break;

      case 'skills':
        result = (
          <div className="space-y-2 text-xs">
            <div className="text-sky-300 font-semibold">1. Embedded & Firmware:</div>
            <p className="text-neutral-300 pl-3">STM32 (ARM Cortex-M3), ESP32, ESP8266, Arduino, C/C++, UART/SPI/I2C/GPIO</p>
            <div className="text-teal-300 font-semibold">2. IoT & Wireless Telemetry:</div>
            <p className="text-neutral-300 pl-3">LoRa SX1278 (433MHz), MQTT, Wi-Fi REST, Blynk IoT, MongoDB Atlas Ingestion</p>
            <div className="text-indigo-300 font-semibold">3. Web & Cloud Engineering:</div>
            <p className="text-neutral-300 pl-3">React 19, TypeScript, Vite, Tailwind CSS, Cloud Firestore, Firebase Auth, PWA</p>
            <div className="text-amber-300 font-semibold">4. Enterprise Networking:</div>
            <p className="text-neutral-300 pl-3">Fortinet Firewalls, SLA Operations, TCP/IP, Network Diagnostic Tools</p>
          </div>
        );
        break;

      case 'projects':
        result = (
          <div className="space-y-2 text-xs">
            <p className="text-neutral-400 font-semibold">Shipped Hardware & Software Projects:</p>
            {PORTFOLIO_DATA.projects.map((p) => (
              <div key={p.id} className="border-l-2 border-neutral-700 pl-2.5 py-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold">{p.number}. {p.title}</span>
                  {p.badge && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/30">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="text-neutral-400 text-[11px]">{p.tagline}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'cat waymate.md':
      case 'waymate':
        result = (
          <div className="space-y-2 text-xs border border-sky-500/30 bg-sky-950/20 p-3 rounded-lg">
            <div className="text-sky-300 font-bold flex items-center justify-between">
              <span>WayMate — Campus Ride-Sharing & Cab-Pooling Platform</span>
              <span className="text-emerald-400 font-mono text-[10px]">● PRODUCTION PWA</span>
            </div>
            <p className="text-neutral-300">
              Built for verified college students at College of Engineering Trivandrum (CET) travelling home.
            </p>
            <div className="space-y-1 font-mono text-[11px] text-neutral-400 bg-neutral-950/70 p-2.5 rounded">
              <div>• Frontend: React 19 (^19.2.8) + TypeScript + Tailwind CSS + Vite</div>
              <div>• Backend: Firebase Auth + Cloud Firestore + Cloud Functions (Node 18)</div>
              <div>• Key Innovation: Atomic Firestore transactions preventing seat race conditions</div>
              <div>• Live URL: <a href="https://waymate-u.web.app/" target="_blank" className="text-sky-400 underline">https://waymate-u.web.app/</a></div>
              <div>• GitHub: <a href="https://github.com/shahadshameem/waymate" target="_blank" className="text-sky-400 underline">github.com/shahadshameem/waymate</a></div>
            </div>
          </div>
        );
        break;

      case 'cat lora.c':
      case 'lora':
        result = (
          <div className="space-y-1 text-[11px] font-mono bg-neutral-950 p-3 rounded-lg border border-neutral-800 text-neutral-300">
            <div className="text-neutral-500">// survivor_protocol.c — Autonomous GPIO Hardware Failover</div>
            <div className="text-sky-400">#include &lt;stm32f10x.h&gt;</div>
            <div className="text-sky-400">#include &lt;sx1278_lora.h&gt;</div>
            <br />
            <div><span className="text-indigo-400">void</span> <span className="text-emerald-400">EX_INTERRUPT_SurvivorFailover</span>(<span className="text-indigo-400">void</span>) &#123;</div>
            <div className="pl-4 text-neutral-400">// Detect gateway heartbeat timeout on GPIO PIN 12</div>
            <div className="pl-4">if (GPIO_ReadInputDataBit(GPIOB, GPIO_Pin_12) == RESET) &#123;</div>
            <div className="pl-8 text-amber-300">LoRa_SetPowerOutput(PA_BOOST_20dBm);</div>
            <div className="pl-8 text-amber-300">ESP32_ActivateStandbyGatewayMode();</div>
            <div className="pl-8 text-emerald-400">Telemetry_Reroute_To_LoRa_Channel_433MHz();</div>
            <div className="pl-8 text-neutral-400">// Link recovered autonomously within &lt;15 seconds</div>
            <div className="pl-4">&#125;</div>
            <div>&#125;</div>
          </div>
        );
        break;

      case 'ping 1.2km':
      case 'ping':
        result = (
          <div className="space-y-1 text-xs font-mono text-emerald-400 bg-neutral-950 p-2.5 rounded border border-neutral-800">
            <div>PING remote-gateway.lora (433.00 MHz, 1200m LOS): 32 bytes data</div>
            <div className="text-neutral-300">32 bytes from node-esp32-failover: seq=1 rssi=-89dBm snr=+9.2dB time=118ms</div>
            <div className="text-neutral-300">32 bytes from node-esp32-failover: seq=2 rssi=-91dBm snr=+8.7dB time=124ms</div>
            <div className="text-neutral-300">32 bytes from node-esp32-failover: seq=3 rssi=-90dBm snr=+9.0dB time=121ms</div>
            <div className="text-sky-400 font-semibold pt-1">--- 1.2 km LoRa ping statistics ---</div>
            <div className="text-neutral-400">3 packets transmitted, 3 received, 0% packet loss, link quality 98%</div>
          </div>
        );
        break;

      case 'contact':
        result = (
          <div className="space-y-1 text-xs">
            <p className="text-white font-semibold">Direct Communication Channels:</p>
            <p className="text-neutral-300">• Email: <a href="mailto:shahadshameemvp@gmail.com" className="text-sky-400 underline">shahadshameemvp@gmail.com</a></p>
            <p className="text-neutral-300">• Phone: <span className="text-sky-400">+91 9495816772</span></p>
            <p className="text-neutral-300">• LinkedIn: <a href={PORTFOLIO_DATA.personal.linkedin} target="_blank" className="text-sky-400 underline">linkedin.com/in/shahad-shameem-v-p</a></p>
            <p className="text-neutral-300">• GitHub: <a href={PORTFOLIO_DATA.personal.github} target="_blank" className="text-sky-400 underline">github.com/shahadshameem</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        result = (
          <div className="text-xs text-rose-400 font-mono">
            command not found: "{cmd}". Type <span className="underline text-white font-semibold">help</span> for a list of valid commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output: result }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandList.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandList.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandList[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      if (historyIndex < commandList.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInputVal(commandList[nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  if (!isOpen) return null;

  return (
    <section id="terminal" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="w-full max-w-3xl rounded-xl bg-neutral-950 border border-neutral-800 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Terminal Title Bar */}
        <div className="px-4 py-3 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 cursor-pointer" onClick={() => setHistory([])} />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 cursor-pointer" />
            <span className="ml-3 font-mono text-xs text-neutral-400 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
              shahad@cet-iot-node: ~
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-neutral-500 hidden sm:inline">ESC / click outside to close</span>
            <button
              onClick={onClose}
              className="p-1 rounded text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Suggestions Chips */}
        <div className="px-4 py-2 bg-neutral-900/60 border-b border-neutral-800/80 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider shrink-0 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-sky-400" />
            Quick:
          </span>
          {['help', 'about', 'projects', 'cat waymate.md', 'cat lora.c', 'ping 1.2km', 'skills', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-1 rounded bg-neutral-800/90 hover:bg-sky-500/20 hover:text-sky-300 text-neutral-300 font-mono text-[11px] border border-neutral-700/60 transition-colors shrink-0"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Output Log Area */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 font-mono text-xs space-y-4">
          {INITIAL_WELCOME}

          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-neutral-400">
                <span className="text-emerald-400 font-bold">shahad@cet-node:~$</span>
                <span className="text-white font-medium">{item.command}</span>
              </div>
              <div className="pl-4 text-neutral-300">{item.output}</div>
            </div>
          ))}

          <div ref={terminalEndRef} />
        </div>

        {/* Active Command Line Input */}
        <div className="px-4 py-3 bg-neutral-900/90 border-t border-neutral-800 flex items-center gap-2">
          <span className="text-emerald-400 font-mono text-xs font-bold shrink-0">
            shahad@cet-node:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a command (try 'projects' or 'cat waymate.md')..."
            className="flex-1 bg-transparent text-white font-mono text-xs outline-none placeholder:text-neutral-600"
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="p-1.5 rounded bg-sky-500 text-neutral-950 hover:bg-sky-400 transition-colors"
            title="Execute"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
