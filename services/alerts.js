const mockAlerts = require('../mocks/alerts.json')

class AlertService {
    static getAlerts(offset,limit){
        
        try {
            const response = mockAlerts.filter((item,i) => i >= offset).filter((item,i) => i < limit);
            return response
        }catch {
            return { error: "error"};
        }
        
    }
}

module.exports = AlertService;