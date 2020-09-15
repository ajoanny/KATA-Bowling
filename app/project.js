class Project {

    calculateScore(list) {
        let result = 0;
        let resultTmp = 0
        list.forEach((score, index) => {

            if(score === 10 ){
                result += 1
            } else if((score + list[index + 1]) === 10) {
                result =+ list[index + 2]
            }

            result += score
        })
        return result;
    }

}

module.exports = Project
