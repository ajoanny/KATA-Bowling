class Project {

    calculateScore(list) {
        let result = 0;
        list.forEach(score => {
            if(score === 10 ){
                result += 1
            }
            result += score
        })
        return result;
    }

}

module.exports = Project
