import styled from "styled-components";

type CenterProps = {
	direction?: 'column' | 'row'
};

type UnstyledButtonProps = {
	showBorder?: boolean
}

export const Center = styled.div<CenterProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: ${(props) => props.direction ? props.direction : 'column'};
`

export const Headline = styled.div`
	color: ${(props) => props.color};
	font-size: 4rem;
	font-weight: 100;
	user-select: none;
`

export const UnstyledButton = styled.button<UnstyledButtonProps>`
	--webkit-appearance: none;
	border: none;
	background-color: transparent;
	font-weight: 100;
	cursor: pointer;
	border-radius: 4px;
	${((props) => props.showBorder ? 'border: 1px solid rgb(230,218,217)' : '')}
`

export const ThinText = styled.div`
	font-weight: 100;
	font-size: 0.8rem
`

export const CardWrapper = styled.div`
	position: relative;
`

export const BodyWrapper = styled(Center)`
	height: 100vh;
`