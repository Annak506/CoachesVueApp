export default{
    async contactCoach(context, payload){
        const newRequest = {
            userEmail: payload.email,
            message: payload.message
        };

        const response = await fetch(`https://vue-project-d9e35-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest)
        });

        const responseData = await response.json();

        if(!response.ok){
            const error = new Error(responseData.message || "Failed to send request");
            throw error;
        }

        newRequest.id = responseData.name;
        newRequest.coachId = payload.coachId;

        context.commit('addRequest', newRequest)
    },
   
    async fetchRequests(context) {
        const coachId = context.rootGetters.userId;
        console.log("coachId", coachId);
    
        const response = await fetch(`https://vue-project-d9e35-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`);
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || "Failed to fetch requests");
            throw error;
        }
    
        console.log("responseData", responseData);
    
        const requests = [];
    
        // Populate the requests array if responseData is not null
        for (const key in responseData) {
            const request = {
                id: key,
                coachId: coachId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message,
            };
            requests.push(request);
        }
    
        // Commit the requests to the store
        context.commit('setRequests', requests);
    }}    