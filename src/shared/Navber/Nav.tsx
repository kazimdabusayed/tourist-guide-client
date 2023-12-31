import React from 'react'
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Spacer,
  Collapse,
  Icon,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Center,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import ToggleColorMode from '../../components/ToggleColorMode';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure()
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      background: "#aa8edb",
      color: "#ffffff",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          logOut();
          Swal.fire(
            "Logged Out!",
            "You have successfully logged out.",
            "success"
          );
        }
      })
      .catch();
  };

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
          flex={{ base: 1, lg: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', lg: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 2, md: 1 }} justify={{ base: 'center', lg: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', lg: 'left' })}
            fontFamily={'heading'}
            className='text-2xl md:text-3xl font-semibold sm:font-bold '
            color={useColorModeValue('cyan.500', 'cyan.500')}>
            Tourist Trail
          </Text>
        </Flex>
        <Flex
          display={{ base: 'none', lg: 'flex' }}
          justifyContent="center"
          alignItems="center"
          flexGrow="1"
        >
          <DesktopNav />
        </Flex>
        <Stack
          flex={{ base: 1 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={4}
        >
          <div className='hidden xsm:inline'>
            <ToggleColorMode />
          </div>
          {user ?
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"sm"}
                  src={
                    user?.photoURL ? user.photoURL : "https://avatars.dicebear.com/api/male/username.svg"
                  }
                />
              </MenuButton>
              <MenuList alignItems={"center"}>
                <br />
                <Center>
                  <Avatar
                    size={"2xl"}
                    src={
                      user?.photoURL ? user.photoURL : "https://avatars.dicebear.com/api/male/username.svg"
                    }
                  />
                </Center>
                <br />
                <Center>
                  <p>{user?.displayName}</p>
                </Center>
                <Center>
                  <p>{user?.email}</p>
                </Center>
                <MenuDivider />
                <MenuItem><NavLink to={'/dashboard'}>Dashboard</NavLink></MenuItem>
                <MenuItem>
                  Offer Announcements
                </MenuItem>
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
              </MenuList>
            </Menu>
            :
            <>
              <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'/signin'}>
                Sign In
              </Button>
              <Button
                as={'a'}
                display={{ base: 'none', lg: 'inline-flex' }}
                fontSize={'sm'}
                fontWeight={600}
                color={'white'}
                bg={'pink.400'}
                href={'/signup'}
                _hover={{
                  bg: 'pink.300',
                }}>
                Sign Up
              </Button>
            </>
          }
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')
  const popoverContentBgColor = useColorModeValue('white', 'gray.800')

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? '/'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'lg'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  )
}

const MobileNav = () => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ lg: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '/'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Community',
    href: '/community',
  },
  {
    label: 'Blogs',
    href: '/blogs',
  },
  {
    label: 'About Us',
    href: '/aboutus',
  },
  {
    label: 'Contact Us',
    href: '/contactus',
  },
  // {
  //   label: 'Inspiration',
  //   children: [
  //     {
  //       label: 'Explore Design Work',
  //       subLabel: 'Trending Design to inspire you',
  //       href: '/insepiration',
  //     },
  //     {
  //       label: 'New & Noteworthy',
  //       subLabel: 'Up-and-coming Designers',
  //       href: '#',
  //     },
  //   ],
  // },
  // {
  //   label: 'Find Work',
  //   children: [
  //     {
  //       label: 'Job Board',
  //       subLabel: 'Find your dream design job',
  //       href: '#',
  //     },
  //     {
  //       label: 'Freelance Projects',
  //       subLabel: 'An exclusive list for contract work',
  //       href: '#',
  //     },
  //   ],
  // },
]