const mockAlerts = require('../mocks/alerts.json')

class AlertService {
    static getAlerts(offset,limit,id){
        
        try {
            var response = mockAlerts.filter((item,i) => i >= offset).filter((item,i) => i < limit);
            if(id != undefined){
                return response.filter((item,i) => item._id === id)
            }
            return response
        }catch {
            return { error: "error"};
        }
        
    }
}

module.exports = AlertService;