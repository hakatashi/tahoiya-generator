<template>
	<el-container style="height: 500px; border: 1px solid #eee">
		<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
			<el-menu :default-openeds="['1', '3']">
				<el-submenu index="1">
					<template slot="title"><i class="el-icon-message"/>Navigator One</template>
					<el-menu-item-group>
						<template slot="title">Group 1</template>
						<el-menu-item index="1-1">Option 1</el-menu-item>
						<el-menu-item index="1-2">Option 2</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="Group 2">
						<el-menu-item index="1-3">Option 3</el-menu-item>
					</el-menu-item-group>
					<el-submenu index="1-4">
						<template slot="title">Option4</template>
						<el-menu-item index="1-4-1">Option 4-1</el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-submenu index="2">
					<template slot="title"><i class="el-icon-menu"/>Navigator Two</template>
					<el-menu-item-group>
						<template slot="title">Group 1</template>
						<el-menu-item index="2-1">Option 1</el-menu-item>
						<el-menu-item index="2-2">Option 2</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="Group 2">
						<el-menu-item index="2-3">Option 3</el-menu-item>
					</el-menu-item-group>
					<el-submenu index="2-4">
						<template slot="title">Option 4</template>
						<el-menu-item index="2-4-1">Option 4-1</el-menu-item>
					</el-submenu>
				</el-submenu>
				<el-submenu index="3">
					<template slot="title"><i class="el-icon-setting"/>Navigator Three</template>
					<el-menu-item-group>
						<template slot="title">Group 1</template>
						<el-menu-item index="3-1">Option 1</el-menu-item>
						<el-menu-item index="3-2">Option 2</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="Group 2">
						<el-menu-item index="3-3">Option 3</el-menu-item>
					</el-menu-item-group>
					<el-submenu index="3-4">
						<template slot="title">Option 4</template>
						<el-menu-item index="3-4-1">Option 4-1</el-menu-item>
					</el-submenu>
				</el-submenu>
			</el-menu>
		</el-aside>

		<el-container>
			<el-header style="text-align: right; font-size: 12px">
				<el-dropdown>
					<i class="el-icon-setting" style="margin-right: 15px"/>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>View</el-dropdown-item>
						<el-dropdown-item>Add</el-dropdown-item>
						<el-dropdown-item>Delete</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<span>Tom</span>
			</el-header>

			<el-main>
				<p>
					{{text}}
				</p>
			</el-main>
		</el-container>
	</el-container>
</template>

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

<script>
import erratic from 'erratic';
import grammer from './grammer.bnf';

const rules = erratic.parse(grammer);

export default {
	data() {
		return {
			text: '',
		};
	},
	created() {
		this.text = erratic.generate(rules, 'list');
	},
};
</script>
