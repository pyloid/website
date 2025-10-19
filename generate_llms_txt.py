#!/usr/bin/env python3
"""
Generate llms.txt file from all MDX documentation files
"""
import os
import re
from pathlib import Path

# def clean_mdx_content(content):
#     """Remove MDX-specific syntax and components"""
#     # Remove frontmatter
#     content = re.sub(r'^---\n.*?\n---\n', '', content, flags=re.DOTALL)
    
#     # Remove JSX/React components
#     content = re.sub(r'<[A-Z][^>]*>.*?</[A-Z][^>]*>', '', content, flags=re.DOTALL)
#     content = re.sub(r'<[A-Z][^>]*/>', '', content)
    
#     # Remove Link components but keep the text
#     content = re.sub(r'<Link[^>]*>(.*?)</Link>', r'\1', content)
    
#     # Remove span with className
#     content = re.sub(r'<span className="[^"]*">(.*?)</span>', r'\1', content)
    
#     # Remove other inline HTML tags but keep content
#     content = re.sub(r'<([^/>]+)>(.*?)</\1>', r'\2', content)
    
#     # Clean up multiple newlines
#     content = re.sub(r'\n{3,}', '\n\n', content)
    
#     return content.strip()

def read_mdx_file(filepath):
    """Read and clean an MDX file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return f.read()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return None

def get_section_name(path_str):
    """Convert path to section name"""
    if path_str == '.':
        return "Quick Start"
    
    section_map = {
        'api/pyloid': 'API Reference - Pyloid',
        'api/pyloid-js': 'API Reference - Pyloid JS',
        'api/pyloid-builder': 'API Reference - Pyloid Builder',
        'core-concepts': 'Core Concepts',
        'distribute': 'Distribution',
        'guides': 'Guides',
    }
    
    return section_map.get(path_str, path_str.replace('-', ' ').title())

def scan_mdx_files(base_path):
    """Dynamically scan and organize MDX files"""
    sections_dict = {}
    
    # Define section order priority
    section_order = [
        '.',  # root files (index, prerequisites)
        'core-concepts',
        'api/pyloid',
        'api/pyloid-js',
        'api/pyloid-builder',
        'distribute',
        'guides',
    ]
    
    # Scan all MDX files
    for mdx_file in sorted(base_path.rglob('*.mdx')):
        relative_path = mdx_file.relative_to(base_path)
        relative_str = str(relative_path).replace('\\', '/')
        
        # Determine section
        parent = mdx_file.parent.relative_to(base_path)
        parent_str = str(parent).replace('\\', '/')
        
        if parent_str == '.':
            section_key = '.'
        else:
            section_key = parent_str
        
        if section_key not in sections_dict:
            sections_dict[section_key] = []
        
        sections_dict[section_key].append(relative_str)
    
    # Sort files within each section
    for key in sections_dict:
        sections_dict[key].sort()
    
    # Organize into ordered list
    sections = []
    
    # Add sections in priority order
    for section_key in section_order:
        if section_key in sections_dict:
            section_name = get_section_name(section_key)
            sections.append((section_name, sections_dict[section_key]))
            del sections_dict[section_key]
    
    # Add any remaining sections not in priority list
    for section_key in sorted(sections_dict.keys()):
        section_name = get_section_name(section_key)
        sections.append((section_name, sections_dict[section_key]))
    
    return sections

def generate_links_txt(base_path, sections):
    """Generate llms.txt with links only"""
    print("\nGenerating llms.txt (links only)...")
    
    llms_links = [
        "# Pyloid",
        "",
        "> Pyloid is a Python framework for building desktop applications with web technologies (HTML, CSS, JavaScript).",
        "> It provides an Electron-like experience for Python developers.",
        "",
        "## Docs",
        "",
        "- [Full Docs](https://pyloid.com/llms-full.txt): Full documentation of Pyloid.",
        "",
    ]
    
    # Add sections with links
    for section_name, files in sections:
        llms_links.append(f"## {section_name}")
        llms_links.append("")
        
        for file_path in files:
            # Convert file path to URL
            url_path = file_path.replace('\\', '/').replace('.mdx', '')
            
            # Get title from file
            full_path = base_path / file_path
            title = get_title_from_file(full_path)
            
            # Create link
            llms_links.append(f"- [{title}](https://pyloid.com/docs/{url_path})")
        
        llms_links.append("")
    
    # Write to llms.txt
    output_path = Path('public/llms.txt')
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(llms_links))
    
    print(f"  Created {output_path} ({output_path.stat().st_size / 1024:.2f} KB)")

def get_title_from_file(filepath):
    """Extract title from MDX file frontmatter or filename"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
            
            # Try to extract title from frontmatter
            match = re.search(r'title:\s*(.+)', content)
            if match:
                return match.group(1).strip()
            
            # Fallback to filename
            return filepath.stem.replace('-', ' ').title()
    except Exception:
        return filepath.stem.replace('-', ' ').title()

def generate_llms_txt():
    """Generate llms.txt from all MDX files"""
    base_path = Path('content/docs')
    
    # Dynamically scan and organize documentation sections
    print("Scanning MDX files...")
    sections = scan_mdx_files(base_path)
    print(f"Found {len(sections)} sections")
    
    # Generate links version (llms.txt)
    generate_links_txt(base_path, sections)
    
    # Generate full content version (llms-full.txt)
    print("\nGenerating llms-full.txt (full content)...")
    
    # Header for full version
    llms_content = [
        "# Pyloid Documentation",
        "",
        "## Overview",
        "",
        "Pyloid is a Python framework for building desktop applications with web technologies (HTML, CSS, JavaScript).",
        "It provides an Electron-like experience for Python developers.",
        "",
        "Website: https://www.pyloid.com",
        "GitHub: https://github.com/pyloid/pyloid",
        "",
        "=" * 80,
        "",
    ]
    
    # Process each section
    for section_name, files in sections:
        print(f"Processing section: {section_name} ({len(files)} files)")
        llms_content.append(f"# {section_name}")
        llms_content.append("")
        llms_content.append("=" * 80)
        llms_content.append("")
        
        for file_path in files:
            full_path = base_path / file_path
            if not full_path.exists():
                print(f"  Warning: File not found: {full_path}")
                continue
            
            print(f"  - {file_path}")
            content = read_mdx_file(full_path)
            if content:
                # Add file marker
                llms_content.append(f"## File: {file_path}")
                llms_content.append("")
                llms_content.append(content)
                llms_content.append("")
                llms_content.append("-" * 80)
                llms_content.append("")
    
    # Write to llms-full.txt
    output_path = Path('public/llms-full.txt')
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(llms_content))
    
    print(f"  Created {output_path} ({output_path.stat().st_size / 1024:.2f} KB)")
    
    # Calculate statistics
    total_files = sum(len(files) for _, files in sections)
    
    print("\n" + "=" * 60)
    print("Successfully generated LLMS documentation files")
    print(f"Total sections: {len(sections)}")
    print(f"Total files: {total_files}")
    print("=" * 60)

if __name__ == '__main__':
    generate_llms_txt()
