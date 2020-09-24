<template>
    <div id="app">
        <!--el-container：构建整个页面框架-->
        <el-container style="height: 500px; border: 1px solid #eee">
            <!--el-aside：构建左侧菜单-->
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
                <!--
                    el-menu: 左侧菜单内容，常用属性：
                      :default-openeds: 默认展开的菜单，通过菜单的index值关联
                      :default-active: 默认选中的选项，通过菜单的index值关联
                    -->
                <el-menu :default-openeds="['1', '3']" :default-active="'1-1'">

                    <!--
                        el-submenu:可展开的菜单，常用属性：
                          index：菜单的下标，文本类型，不能是数值类型
                    -->
                    <el-submenu index="1">
                        <!--
                                      template:对于el-submenu的菜单名
                                      i:设置菜单图标，通过class属性设置
                                        el-icon-message
                                        el-icon-menu
                                        el-icon-setting
                        -->
                        <template slot="title"><i class="el-icon-message"></i>导航一</template>
                        <!--
                                      el-menu-item-group：将菜单内的选项进行分组
                                           -->

                        <el-menu-item-group>
                            <template slot="title">分组一</template>

                            <!--
                            el-menu-item：菜单的子节点，不可再展开，常用属性：
                              index：菜单的下标，文本类型，不能是数值类型
                            -->
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>

                    </el-submenu>

                </el-menu>
            </el-aside>

            <el-container>
                <el-header style="text-align: right; font-size: 12px">
                    <el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>
                </el-header>

                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            };
            return {
                tableData: Array(20).fill(item)
            }
        }
    }
</script>

<style>
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }
</style>
