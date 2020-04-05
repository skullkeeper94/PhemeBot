//All info taken from here https://switchbrew.org/wiki/Error_codes

let errorInfo = class {
    moduleName = '';
    descriptions = {};
    constructor(name) {this.moduleName = name};
};

var kernelInfo = new errorInfo('Kernel');
var FSInfo = new errorInfo('FS');
var OSInfo = new errorInfo('OS (Memory, Thread, Mutex, NVIDIA)');
var HtcsInfo = new errorInfo('Htcfs');
var NCMInfo = new errorInfo('NCM');
var DDInfo = new errorInfo('DD');
var debugMonitorInfo = new errorInfo('Debug Monitor');
var LRInfo = new errorInfo('LR');
var loaderInfo = new errorInfo('Loader');
var CMIFInfo = new errorInfo('CMIF (IPC command interface)');
var HIPCInfo = new errorInfo('HIPC (IPC)');
var PMInfo = new errorInfo('PM');
var NSInfo = new errorInfo('NS');
var BsdsocketsInfo = new errorInfo('Bsdsockets');
var HtcInfo = new errorInfo('Htc');
var TSCInfo = new errorInfo('TSC');
var NCMInfo = new errorInfo('NCM (content)');
var SMInfo = new errorInfo('SM');
var ROInfo = new errorInfo('RO (userland)');
var GCInfo = new errorInfo('GC');
var SDMMCInfo = new errorInfo('SDMMC');
var OVLNInfo = new errorInfo('OVLN');
var SPLInfo = new errorInfo('SPL');
var socketInfo = new errorInfo('Socket');
var HtclowInfo = new errorInfo('Htclow');
var busInfo = new errorInfo('Bus');
var HtcfsInfo = new errorInfo('Htcfs');
var AsyncInfo = new errorInfo('Async');
var ETHCInfo = new errorInfo('ETHC');
var I2CInfo = new errorInfo('I2C');
var GPIOInfo = new errorInfo('GPIO');
var UARTInfo = new errorInfo('UART');
var settingsInfo = new errorInfo('Settings');
var WLANInfo = new errorInfo('WLAN');
var XCDInfo = new errorInfo('XCD');
var NIFMInfo = new errorInfo('NIFM');
var HwopusInfo = new errorInfo('Hwopus');
var SasbusInfo = new errorInfo('Sasbus'); // There are two sasbus variables
var BluetoothInfo = new errorInfo('Bluetooth');
var VIInfo = new errorInfo('VI');
var NFPInfo = new errorInfo('NFP');
var timeInfo = new errorInfo('Time');
var FGMInfo = new errorInfo('FGM');
var OEInfo = new errorInfo('OE');
var PCIeInfo = new errorInfo('PCIe');
var friendsInfo = new errorInfo('Friends');
var BCATInfo = new errorInfo('BCAT');
var SSLInfo = new errorInfo('SSL');
var accountInfo = new errorInfo('Account');
var newsInfo = new errorInfo('News');
var miiInfo = new errorInfo('Mii');
var NFCInfo = new errorInfo('NFC');
var AMInfo = new errorInfo('AM');
var playReportInfo = new errorInfo('Play Report');
var AHIDInfo = new errorInfo('AHID');
var homeMenuInfo = new errorInfo('Home Menu (Qlaunch)');
var PCVInfo = new errorInfo('PCV');
var OMMInfo = new errorInfo('OMM');
var BPCInfo = new errorInfo('BPC');
var PSMInfo = new errorInfo('PSM');
var NIMInfo = new errorInfo('NIM');
var PSCInfo = new errorInfo('PSC');
var TCInfo = new errorInfo('TC');
var USBInfo = new errorInfo('USB');
var NSDInfo = new errorInfo('NSD');
var PCTLInfo = new errorInfo('PCTL');
var BTMInfo = new errorInfo('BTM');
var LAInfo = new errorInfo('LA (Library Applet)');
var ETicketInfo = new errorInfo('ETicket');
var NGCInfo = new errorInfo('NGC (Bad Words)');
var errorReportInfo = new errorInfo('Error Report');
var APMInfo = new errorInfo('APM');
var CECInfo = new errorInfo('CEC');
var profilerInfo = new errorInfo('Profiler');
var errorUploadInfo = new errorInfo('Error Upload');
var audioInfo = new errorInfo('Audio');
var NPNSInfo = new errorInfo('NPNS');
var NPNSXMPPStreamInfo = new errorInfo('NPNS XMPP Stream');
var ARPInfo = new errorInfo('ARP');
var updaterInfo = new errorInfo('Updater');
var SWKBDInfo = new errorInfo('SWKBD');
var mifareInfo = new errorInfo('Mifare');
var userlandAInfo = new errorInfo('Userland (assert)');
var fatalInfo = new errorInfo('Fatal');
var ECInfo = new errorInfo('EC (Shop)');
var SPSMInfo = new errorInfo('SPSM');
var BGTCInfo = new errorInfo('BGTC');
var userlandCInfo = new errorInfo('Userland (crash)'); //This is a seperate Userland error. userlandA is 162 and userlandC is 168
var SasbusPeriodicReceiveModeInfo = new errorInfo('Sasbus Periodic Receive Mode');
var PDMInfo = new errorInfo('PDM');
var OLSCInfo = new errorInfo('OLSC');
var SREPOInfo = new errorInfo('SREPO');
var DauthInfo = new errorInfo('Dauth');
var PWMInfo = new errorInfo('PWM');
var RTCInfo = new errorInfo('RTC');
var regulatorInfo = new errorInfo('Regulator');
var LEDInfo = new errorInfo('Led');
var clkrstInfo = new errorInfo('Clkrst');
var HIDInfo = new errorInfo('HID');
var LDNInfo = new errorInfo('LDN');
var lrsensorInfo = new errorInfo('lrsensor');
var captureInfo = new errorInfo('Capture');
var manuInfo = new errorInfo('Manu');
var ATKInfo = new errorInfo('ATK');
var webInfo = new errorInfo('Web');
var LCSInfo = new errorInfo('LCS (Local Content Sharing)');
var GRCInfo = new errorInfo('GRC');
var albumInfo = new errorInfo('GRC');
var migrationInfo = new errorInfo('Migration');
var migrationIdcServerInfo = new errorInfo('Migration Idc Server');
var hidbusInfo = new errorInfo('Hidbus');
var websocketInfo = new errorInfo('Websocket');
var notificationInfo = new errorInfo('Notification');
var insInfo = new errorInfo('Ins');
var lp2pInfo = new errorInfo('Lp2p');

var NXModules = {1 : kernelInfo, 2 : FSInfo, 3 : OSInfo, 4 : HtcsInfo, 5 : NCMInfo, 6 : DDInfo, 7 : debugMonitorInfo, 8 : LRInfo, 9 : loaderInfo, 10 : CMIFInfo, 11 : HIPCInfo, 15 : PMInfo, 16 : NSInfo, 17 : BsdsocketsInfo, 18 : HtcInfo, 19 : TSCInfo, 20 : NCMInfo, 21 : SMInfo, 22 : ROInfo, 23 : GCInfo, 24 : SDMMCInfo, 25 : OVLNInfo, 26 : SPLInfo, 27 : socketInfo, 29 : HtclowInfo, 30 : busInfo, 31 : HtcfsInfo, 32 : AsyncInfo, 100 : ETHCInfo, 101 : I2CInfo, 102 : GPIOInfo, 103 : UARTInfo, 105 : settingsInfo, 107 : WLANInfo, 108 : XCDInfo, 110 : NIFMInfo, 111 : HwopusInfo, 112 : SasbusInfo, 113 : bluetoothInfo, 114 : VIInfo, 115 : NFPInfo, 116 : timeInfo, 117 : FGMInfo, 118 : OEInfo, 120 : PCIeInfo, 121 : friendsInfo, 122 : BCATInfo, 123 : SSLInfo, 124 : accountInfo, 125 : newsInfo, 126 : miiInfo, 127 : NFCInfo, 128 : AMInfo, 129 : playReportInfo, 130 : AHIDInfo, 132 : homeMenuInfo, 133 : PCVInfo, 134 : OMMInfo, 135 : BPCInfo, 136 : PSMInfo, 137 : NIMInfo, 138 : PSCInfo, 139 : TCInfo, 140 : USBInfo, 141 : NSDInfo, 142 : PCTLinfo, 143 : BTMInfo, 144 : LAInfo, 145 : ETicketInfo, 146 : NGCInfo, 147 : errorReportInfo, 148 : APMInfo, 149 : CECInfo, 150 : profilerInfo, 151 : errorUploadInfo, 153 : audioInfo, 154 : NPNSInfo, 155 : NPNSXMPPStreamInfo, 157 : ARPInfo, 158 : updaterInfo, 159 : SWKBDInfo, 161 : MifareInfo, 162 : userlandAInfo, 163 : fatalInfo, 164 : ECInfo, 165 : SPSMInfo, 167 : BGTCInfo, 168 : userlandCInfo, 169 : SasbusPeriodicReceiveModeInfo, 178 : PDMInfo, 179 : OLSCInfo, 180 : SREPOInfo, 181 : DauthInfo, 187 : SasbusInfo, 189 : PWMInfo, 191 : RTCInfo, 192 : regulatorInfo, 193 : LEDInfo, 197 : clkrstInfo, 202 : HIDInfo, 203 : LDNInfo, 205 : lrsensorInfo, 206 : captureInfo, 208 : manuInfo, 209 : ATKInfo, 210 : webInfo, 211 : LCSInfo, 212 : GRCInfo, 214 : albumInfo, 216 : migrationInfo, 217 : migrationIdcServerInfo, 218 : hidbusInfo, 223 : websocketInfo, 229 : notificationInfo, 230 : insInfo, 231 : lp2pInfo};

module.exports = {NXModules};
