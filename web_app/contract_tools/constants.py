import os
from dataclasses import dataclass
from enum import Enum
from typing import Iterator

EKUBO_MAINNET_ADDRESS: str = (
    "0x00000005dd3d2f4429af886cd1a3b08289dbcea99a294197e9eb43b0e0325b4b" # mainnet address
)

SPOTNET_CORE_ADDRESS = os.getenv(
    "SPOTNET_CORE_ADDRESS",
    "0x00000005dd3d2f4429af886cd1a3b08289dbcea99a294197e9eb43b0e0325b4b",
)


@dataclass(frozen=True)
class TokenConfig:
    """
    Class to hold the token configuration for the pools.
    """

    address: str
    decimals: int
    name: str


class TokenParams:
    """
    Class to hold the token configurations for tokens as class-level variables.
    """

    ETH = TokenConfig(
        name="ETH",
        address="0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
        decimals=18,
    )
    STRK = TokenConfig(
        name="STRK",
        address="0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d",
        decimals=18,
    )
    USDC = TokenConfig(
        name="USDC",
        address="0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8",
        decimals=6,
    )

    @classmethod
    def tokens(cls) -> Iterator[TokenConfig]:
        """
        Return an iterator over all token configurations.
        """
        return iter([cls.ETH, cls.STRK, cls.USDC])

    @classmethod
    def get_token_address(cls, token_name: str) -> str:
        """
        Get the token address for a given token name.
        :param token_name: Token name
        :return: Token address
        """
        for token in cls.tokens():
            if token.name == token_name:
                return token.address
        raise ValueError(f"Token {token_name} not found")

    @classmethod
    def get_token_decimals(cls, token_name: str) -> int:
        for token in cls.tokens():
            if token.name == token_name:
                return token.decimals
        raise ValueError(f"Token {token_name} not found")


class ProtocolAddress(Enum):

    zklend: str = "0x04c0a5193d58f74fbace4b74dcf65481e734ed1714121bdc571da345540efa05"
    nostra: str = "0x00c530f2c0aa4c16a0806365b0898499fba372e5df7a7172dc6fe9ba777e8007"
