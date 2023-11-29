import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
} from "@chakra-ui/react";
import Overview from "./Overview/Overview";
import OurPackages from "./OurPackages/OurPackages";
import OurTourGuides from "./OuerTourGuides/OurTourGuides";

const TravelGuideTabs = () => {
	return (
		<div className="mt-12">
			<Tabs
				position="relative"
				align="center"
				variant="enclosed-colored"
				colorScheme="pink"
			>
				<TabList>
					<Tab>Overview</Tab>
					<Tab>Our Packages</Tab>
					<Tab>Meet Our Tour Guide</Tab>
				</TabList>
				<TabPanels>
					<TabPanel>
						<Overview />
					</TabPanel>
					<TabPanel>
						<OurPackages />
					</TabPanel>
					<TabPanel>
						<OurTourGuides />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</div>
	);
};

export default TravelGuideTabs;
