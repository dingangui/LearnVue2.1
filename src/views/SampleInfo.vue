<template>
    <div>
        <table>
            <tr>
                <td>name</td>
                <td>sex</td>
                <td>age</td>
            </tr>
            <tr v-for="item in SampleInfo">
                <td>{{item.patientname}}</td>
                <td>{{item.sex}}</td>
                <td>{{item.age}}</td>
            </tr>
        </table>
        {{msg}}
    </div>
</template>

<script>
    export default {
        name: "SampleInfo",
        data() {
            return {
                msg: 'Hello Vue',
                SampleInfo: []
            }
        },
        created() {
            const that = this;
            axios.get('http://localhost:9090/sample/findAll').then(function (resp) {
                console.log(resp)
                that.SampleInfo = resp.data;
            })
        }
    }
</script>

<style scoped>

</style>