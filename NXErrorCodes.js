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
var HtclowInfo = new errorInfo('Htclow')
var busInfo = new errorInfo('Bus');
var HtcfsInfo = new errorInfo('Htcfs');
var AsyncInfo = new errorInfo('Async');
var ETHCInfo = new errorInfo('ETHC');
var I2CInfo = new errorInfo('I2C');
var GPIOInfo = new errorInfo('GPIO');
var UARTInfo = new errorInfo('UART');
var settingsInfo = new errorInfo('Settings');
var WLANInfo = new errorInfo('WLAN');

var NXModules = {1 : kernelInfo, 2 : FSInfo, 3 : OSInfo, 4 : HtcsInfo, 5 : NCMInfo, 6 : DDInfo, 7 : debugMonitorInfo, 8 : LRInfo, 9 : loaderInfo, 10 : CMIFInfo, 11 : HIPCInfo, 15 : PMInfo, 16 : NSInfo, 17 : BsdsocketsInfo, 18 : HtcInfo, 19 : TSCInfo, 20 : NCMInfo, 21 : SMInfo, 22 : ROInfo, 23 : GCInfo, 24 : SDMMCInfo, 25 : OVLNInfo, 26 : SPLInfo, 27 : socketInfo, 29 : HtclowInfo, 30 : busInfo, 31 : HtcfsInfo, 32 : AsyncInfo, 100 : ETHCInfo, 101 : I2CInfo, 102 : GPIOInfo, 103 : UARTInfo, 105 : settingsInfo, 107 : WLANInfo};

module.exports = {NXModules};