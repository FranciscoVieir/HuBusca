import React from 'react';
import styled from 'styled-components/native';

export const CardContainer = styled.View`
	max-width: 400px;
	margin: 0 auto;
	padding: 20px;
	border: 3px solid #6912a5;
	border-radius: 8px;
	align-items: center;
`;

export const Avatar = styled.Image`
	width: 120px;
	height: 120px;
	border-radius: 60px;
	margin-bottom: 10px;
`;

export const Name = styled.Text`
	font-size: 24px;
	font-weight: bold;
	margin-bottom: 5px;
	color: #fff;
`;

export const Login = styled.Text`
	font-size: 18px;
	color: #fff;
	margin-bottom: 5px;
`;

export const Location = styled.Text`
	font-size: 16px;
	color: #fff;
`;
