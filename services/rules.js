const mockAlerts = require('../mocks/alerts.json')

class RulesService {
    static getRules(offset,limit){
        let rulesList = []
        try {
            mockAlerts.map((item,i) => {
                const rulesExistInArray = !!rulesList.filter(rule => rule.id === item._source.rule.id).length;
                const countAlertByRule = (id) => mockAlerts.filter(alert => alert._source.rule.id === id).length;
                if(!rulesExistInArray){
                    const total_alerts = countAlertByRule(item._source.rule.id);
                    let rule = item._source.rule
                    rule["total_alerts"] = total_alerts;
                    rulesList.push(rule)
                }    
            })
            const validateParamaOffset = offset === undefined ? 0 : offset;
            const validateParamaLimit = limit === undefined ? rulesList.length : limit;
            const response = rulesList.filter((item,i) => i >= validateParamaOffset).filter((item,i) => i < validateParamaLimit);;
            return response
        }catch {
            return { error: "error"};
        }
        
    }

    static getRuleById(id){
        try{
            const findRule = mockAlerts.find(item => item._source.rule.id === id)
            const countRuleByAgent = (id) => mockAlerts.filter(alert => alert._source.rule.id === id).length;
            const total_alerts = countRuleByAgent(id);
            let objAgent = findRule._source.rule;
            objAgent["total_alerts"] = total_alerts;
            return objAgent;
        }catch {
            return { error: "error"};
        }
    }
}

module.exports = RulesService;