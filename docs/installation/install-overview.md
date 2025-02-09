# Installation Methods Comparison

## Core Options

|                       | Hummingbot + Dashboard       | Docker Standalone            | Source Installation          |
|-----------------------|-------------------------------|------------------------------|------------------------------|
| **Complexity**         | Easiest                       | Moderate                     | Most Complex                 |
| **Audience**           | New users, GUI preference     | Most users, CLI comfortable  | Developers, Code Modifiers   |
| **Customization**      | Limited (UI-based)            | Config files only            | Full code access             |
| **Maintenance**        | Automatic updates             | Manual version management    | Manual build/update          |
| **Multi-Instance**     | Managed via Dashboard         | Manual Docker commands       | Possible, but not recommended |
| **DEX Support**        | Some, depending on API        | Requires separate Gateway    | Requires separate Gateway     |

## When to Choose Which?

<div class="grid cards" markdown>

-   __[Dashboard + Hummingbot](../installation/index.md)__  
    **Choose if**:
    - You prefer a graphical interface
    - Managing multiple bots/strategies
    - New to algorithmic trading
    - Want built-in backtesting tools
    
    *Limitations*:  
    - Less low-level control  
    - Requires more system resources

-   __[Docker Standalone](../installation/docker.md)__  
    **Choose if**:
    - Comfortable with CLI
    - Want isolated environments
    - Need multiple instances
    - Prefer easy version switching
    
    *Limitations*:  
    - Can't modify core code  
    - Manual certificate management

-   __[Source Installation](../installation/source.md)__  
    **Choose if**:
    - Developing custom strategies  
    - Modifying Hummingbot core  
    - Testing unreleased features  
    - Advanced debugging needs
    
    *Limitations*:  
    - Complex setup  
    - Dependency conflicts possible

</div>


## FAQ

**Can I run multiple methods together?**  
Yes - Dashboard can manage Docker instances while you run separate source installations.

**Which is most resource-efficient?**  
Docker standalone (no GUI overhead), followed by Source.

**How to switch versions?**  
- Dashboard: Automatic through UI  
- Docker: Edit `image:` tag  
- Source: `git checkout` tags
