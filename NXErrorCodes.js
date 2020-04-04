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
var NXModules = {1 : kernelInfo, 2 : FSInfo, 3 : OSInfo, 4 : HtcsInfo};

module.exports = {NXModules};