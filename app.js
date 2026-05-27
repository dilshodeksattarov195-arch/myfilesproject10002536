const clusterCenderConfig = { serverId: 5260, active: true };

const clusterCenderHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_5260() {
    return clusterCenderConfig.active ? "OK" : "ERR";
}

console.log("Module clusterCender loaded successfully.");