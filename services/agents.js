const mockAlerts = require('../mocks/alerts.json')

class AgentsService {
    static getAgents(offset,limit){
        let agentList = []
        try {
            mockAlerts.map((item,i) => {
                const agentsExistInArray = !!agentList.filter(agent => agent.id === item._source.agent.id).length;
                const countAlertByAgent = (id) => mockAlerts.filter(alert => alert._source.agent.id === id).length;
                if(!agentsExistInArray){
                    const total_alerts = countAlertByAgent(item._source.agent.id);
                    let agent = item._source.agent
                    agent["total_alerts"] = total_alerts;
                    agentList.push(agent)
                }    
            })
            const validateParamaOffset = offset === undefined ? 0 : offset;
            const validateParamaLimit = limit === undefined ? agentList.length : limit;
            const response = agentList.filter((item,i) => i >= validateParamaOffset).filter((item,i) => i < validateParamaLimit);;
            return response
        }catch {
            return { error: "error"};
        }
        
    }

    static getAgentById(id){
        try{
            const findAgent = mockAlerts.find(item => item._source.agent.id = id)
            const countAlertByAgent = (id) => mockAlerts.filter(alert => alert._source.agent.id === id).length;
            const total_alerts = countAlertByAgent(id);
            let objAgent = findAgent._source.agent;
            objAgent["total_alerts"] = total_alerts;
            return objAgent;
        }catch {
            return { error: "error"};
        }
    }
}

module.exports = AgentsService;