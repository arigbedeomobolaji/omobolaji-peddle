// jshint ignore:start

import React from "react";
import Button from "../../components/helpers/Button";
import ItemWrapper from "../../components/helpers/ItemWrapper";
import { Text } from "../../style";
import {
	SubscribeWrapper,
	AppInfoWrapper,
	ShowcaseContent,
	ShowcaseTitle,
} from "./style";

const AppInfo = () => {
	return (
		<>
			<SubscribeWrapper width="100%">
				<AppInfoWrapper width="80%" margin="-2rem" md>
					<ShowcaseContent
						flexDirection="column"
						justifyContent="center"
						alignItems="flex-start"
						md
					>
						<ShowcaseTitle width="80%" fontSize="1.6rem">
							Subscribe Now And <br /> Great Sepcial Features~
						</ShowcaseTitle>
						<Text width="60%" fontSize="0.85rem">
							Praesent mollis lobortis nisi nec laoreet nisi
						</Text>
					</ShowcaseContent>
					<ItemWrapper
						width="60%"
						justifyContent="center"
						alignItems="center"
					>
						<Button width="90%" fontSize="1.4" primary isLarge>
							Subscribe Now
						</Button>
					</ItemWrapper>
				</AppInfoWrapper>
			</SubscribeWrapper>
		</>
	);
};

export default AppInfo;
